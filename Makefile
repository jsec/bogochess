clean:
	rm -rf ./node_modules

test:
	@NODE_ENV=test ./node_modules/.bin/mocha

run:
	coffee index.coffee

.PHONY: clean test
