YQ:=$(shell which yq)
KUBECTL:=$(shell which kubectl)
DOCKER:=$(shell which docker)
HELM:=$(shell which helm)
KIND:=$(shell which kind)
LINKERD:=$(shell which linkerd)

HAS_YQ:=$(shell which yq > /dev/null 2> /dev/null && echo true || echo false)
HAS_KUBECTL:=$(shell which kubectl > /dev/null 2> /dev/null && echo true || echo false)
HAS_DOCKER:=$(shell which docker > /dev/null 2> /dev/null && echo true || echo false)
HAS_HELM:=$(shell which helm > /dev/null 2> /dev/null && echo true || echo false)
HAS_KIND:=$(shell which kind > /dev/null 2> /dev/null && echo true || echo false)
HAS_LINKERD:=$(shell which linkerd > /dev/null 2> /dev/null && echo true || echo false)

INFO_FILE:="./infra/info.yaml"
CLUSTER_NAME:=$(shell ${YQ} e '.clusterName' ${INFO_FILE})
DEFAULT_CLUSTER_NAME:=$(shell ${YQ} e '.defaultClusterName' ${INFO_FILE})
NAMESPACE:=$(shell ${YQ} e '.namespace' ${INFO_FILE})
LINKERD_NAMESPACE:=$(shell ${YQ} e '.linkerdNamespace' ${INFO_FILE})
LINKERD_VIZ_NAMESPACE:=$(shell ${YQ} e '.linkerdVizNamespace' ${INFO_FILE})

check_prerequisites:
ifeq ($(HAS_YQ),false) 
	$(info yq not installed!)
	@exit 1
endif
ifeq ($(HAS_KUBECTL),false) 
	$(info kubectl not installed!)
	@exit 1
endif
ifeq ($(HAS_DOCKER),false) 
	$(info docker not installed!)
	@exit 1
endif
ifeq ($(HAS_HELM),false) 
	$(info helm not installed!)
	@exit 1
endif
ifeq ($(HAS_KIND),false) 
	$(info kind not installed!)
	@exit 1
endif
ifeq ($(HAS_LINKERD),false) 
	$(info linkerd not installed!)
	@exit 1
endif


print_mk_var: check_prerequisites
	@echo "YQ: [$(YQ)]"
	@echo "KUBECTL: [$(KUBECTL)]"
	@echo "DOCKER: [$(DOCKER)]"
	@echo "HELM: [$(HELM)]"
	@echo "KIND: [$(KIND)]"
	@echo "LINKERD: [$(LINKERD)]"
	@echo "INFO_FILE: [$(INFO_FILE)]"
	@echo "CLUSTER_NAME: [$(CLUSTER_NAME)]"
	@echo "DEFAULT_CLUSTER_NAME: [$(DEFAULT_CLUSTER_NAME)]"
	@echo "NAMESPACE: [$(NAMESPACE)]"
	@echo "LINKERD_NAMESPACE: [$(LINKERD_NAMESPACE)]"

cluster_start: check_prerequisites
	$(KIND) create cluster

cluster_delete: check_prerequisites
	$(KIND) delete cluster --name $(CLUSTER_NAME)
	$(KIND) delete cluster --name $(DEFAULT_CLUSTER_NAME)

create_cluster: check_prerequisites
	$(KIND) create \
	cluster --config=infra/cluster.yaml \
	--name $(CLUSTER_NAME)

set_context_cluster: check_prerequisites
	$(KUBECTL) config set-context $(CLUSTER_NAME)

cluster_info: check_prerequisites
	$(KUBECTL) cluster-info --context kind-$(CLUSTER_NAME)

ingress_controller_install: check_prerequisites
	$(KUBECTL) apply -f infra/ingress_controller.yaml
	@sleep 30
	$(MAKE) wait_for_ingress_controller
  
wait_for_ingress_controller: check_prerequisites
	$(KUBECTL) wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

create_namespace: check_prerequisites
	$(KUBECTL) create namespace $(NAMESPACE) \
	--dry-run=client -o yaml | $(KUBECTL) apply -f -

config_capitals:
	./utils/configApp.sh "capitals"

capitals_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) -C ./containers/capitals print_mk_var build tag load_image deployment_install

wait_for_capitals_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=capitals \
  --timeout=90s

config_languages:
	./utils/configApp.sh "languages"

languages_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_languages
	$(MAKE) -C ./containers/languages print_mk_var build tag load_image deployment_install

wait_for_languages_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=languages \
  --timeout=90s

config_countries:
	./utils/configApp.sh "countries"

countries_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_countries
	$(MAKE) -C ./containers/countries print_mk_var build tag load_image deployment_install

wait_for_countries_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=countries \
  --timeout=90s

config_currencies:
	./utils/configApp.sh "currencies"

currencies_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_currencies
	$(MAKE) -C ./containers/currencies print_mk_var build tag load_image deployment_install

wait_for_currencies_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=currencies \
  --timeout=90s

config_currencies_code:
	./utils/configApp.sh "currenciescode"

currencies_code_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_currencies_code
	$(MAKE) -C ./containers/currenciescode print_mk_var build tag load_image deployment_install

wait_for_currencies_code_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=currencies-code \
  --timeout=90s

config_currencies_name:
	./utils/configApp.sh "currenciesname"

currencies_name_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_currencies_name
	$(MAKE) -C ./containers/currenciesname print_mk_var build tag load_image deployment_install

wait_for_currencies_name_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=currencies-name \
  --timeout=90s

config_currencies_symbol:
	./utils/configApp.sh "currenciessymbol"

currencies_symbol_service_build_tag_push_image_apply: check_prerequisites
	$(MAKE) config_currencies_symbol
	$(MAKE) -C ./containers/currenciessymbol print_mk_var build tag load_image deployment_install

wait_for_currencies_symbol_service: check_prerequisites
	$(KUBECTL) wait --namespace $(NAMESPACE) \
  --for=condition=ready pod \
  --selector=app=currencies-symbol \
  --timeout=90s

linkerd_pre_check: check_prerequisites
	$(LINKERD) check --pre

linkerd_crds_install: check_prerequisites
	$(LINKERD) install --crds | $(KUBECTL) apply -f -

linkerd_control_plane_install: check_prerequisites
	$(LINKERD) install | $(KUBECTL) apply -f -

wait_for_linkerd_control_plane: check_prerequisites
	$(KUBECTL) wait -n $(LINKERD_NAMESPACE) \
  --for=condition=ready pod \
  --selector=linkerd.io/control-plane-ns=linkerd \
  --timeout=180s

linkerd_check: check_prerequisites
	$(LINKERD) check

mesh_services: check_prerequisites
	$(KUBECTL) get -n $(NAMESPACE) deploy -o yaml | \
	$(LINKERD) inject - | \
	$(KUBECTL) apply -f -

wait_for_meshed_resources: check_prerequisites
	$(KUBECTL) wait -n $(NAMESPACE) \
  --for=condition=ready pod \
  --field-selector metadata.namespace \
  --timeout=180s

linkerd_viz_install: check_prerequisites
	$(LINKERD) viz install | kubectl apply -f -

wait_for_linkerd_viz: check_prerequisites
	$(KUBECTL) wait -n $(LINKERD_VIZ_NAMESPACE) \
  --for=condition=ready pod \
  --selector=linkerd.io/control-plane-ns=linkerd \
  --timeout=180s

wait_for_all_apps:
	$(MAKE) wait_for_capitals_service \
	wait_for_languages_service \
	wait_for_currencies_code_service \
	wait_for_currencies_name_service \
	wait_for_currencies_symbol_service \
	wait_for_currencies_service \
	wait_for_countries_service \

all:
	$(MAKE) print_mk_var \
	cluster_start \
	create_cluster \
	set_context_cluster \
	cluster_info \
	ingress_controller_install \
	wait_for_ingress_controller \
	linkerd_pre_check \
	linkerd_crds_install \
	linkerd_control_plane_install \
	wait_for_linkerd_control_plane \
	linkerd_check \
	create_namespace \
	config_capitals \
	capitals_service_build_tag_push_image_apply \
	wait_for_capitals_service \
	config_languages \
	languages_service_build_tag_push_image_apply \
	wait_for_languages_service \
	config_currencies_code \
	currencies_code_service_build_tag_push_image_apply \
	wait_for_currencies_code_service \
	config_currencies_name \
	currencies_name_service_build_tag_push_image_apply \
	wait_for_currencies_name_service \
	config_currencies_symbol \
	currencies_symbol_service_build_tag_push_image_apply \
	wait_for_currencies_symbol_service \
	config_currencies \
	currencies_service_build_tag_push_image_apply \
	wait_for_currencies_service \
	config_countries \
	countries_service_build_tag_push_image_apply \
	wait_for_countries_service \
	mesh_services \
	wait_for_all_apps \
	linkerd_viz_install \
	wait_for_linkerd_viz \

clean_up: cluster_delete
