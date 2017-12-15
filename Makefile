install:
	@yarn install

clean:
	@rm -rf ./node_modules

test:
	@NODE_ENV=test ./node_modules/.bin/mocha "test/**/*.coffee"

run:
	@./node_modules/.bin/coffee index.coffee

.PHONY: run clean test
