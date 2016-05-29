DOCKER_IMAGE := debianrails

DOCKER_ENVS :=

DOCKER_ID := $(shell docker images --quiet="true" --filter="label=name=$(DOCKER_IMAGE)")

DOCKER_PS := $(shell docker ps -a --quiet="true" --filter="label=name=$(DOCKER_IMAGE)")

DOCKER_SHELL := "bash"

default: build run

build:
	docker build -t "$(DOCKER_IMAGE)" . ;

ifneq "$(DOCKER_PS)" ""
run:
	docker run --rm -it $(DOCKER_ENVS) "$(DOCKER_IMAGE)" || true ;
else
run: build
	docker run --rm -it $(DOCKER_ENVS) "$(DOCKER_IMAGE)" || true ;
endif

stop:
	docker stop $(DOCKER_PS) ;

rm:
	docker rm -f $(DOCKER_PS) ;

ifeq "$(DOCKER_PS)" ""
rmi:
	docker rmi -f $(DOCKER_ID) ;
else
rmi: rm
	docker rmi -f $(DOCKER_ID) ;
endif

.PHONY: default build run shell stop rm rmi
