BIND ?= 127.0.0.1
PORT ?= 8080

serve:
	python3 serve.py $(BIND) $(PORT)
