bucket-dev := 's3://NEEDADDED'
bucket-live := 's3://NEEDADDED'

develop:
	@npm run start

build:
	@npm run build

serve:
	@npm run serve

deploy:
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*" \
		--include "*.js" \
		--include "*.js.map" \
		--delete \
		--cache-control='max-age=no-cache, must-revalidate'
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*.html" \
		--exclude "*.js" \
		--exclude "*.js.map" \
		--delete \
		--cache-control='max-age=2592000'

live:
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*" \
		--include "*.js" \
		--include "*.js.map" \
		--delete \
		--cache-control='max-age=no-cache, must-revalidate'
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*.html" \
		--exclude "*.js" \
		--exclude "*.js.map" \
		--delete \
		--cache-control='max-age=2592000'

.PHONY: develop deploy build live serve
