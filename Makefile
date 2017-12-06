bucket-dev := 's3://NEEDADDED'
bucket-live := 's3://NEEDADDED'

develop:
	@npm run start

build:
	@npm run build

serve:
	@http-server ./public -p 8000

deploy:
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*.html" \
		--delete \
		--cache-control='max-age=525600'

live:
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*.html" \
		--delete \
		--cache-control='max-age=525600'

.PHONY: develop deploy build live serve
