install:
	@npm install

clean:
	@rm -rf ./node_modules

test:
	@NODE_ENV=test nyc mocha

run:
	@./node_modules/.bin/coffee index.coffee

.PHONY: run clean test
