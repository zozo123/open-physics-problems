.PHONY: validate generate build test serve pages-sync clean

validate:
	python3 scripts/validate.py

generate:
	python3 scripts/generate.py

build: validate generate
	@echo "Build OK"

test: build
	@python3 -c "import json; d=json.load(open('data/problems.json')); assert len(d['problems'])>=100; assert all('epistemology' in p and 'agentic_10day' in p for p in d['problems']); print('tests ok', len(d['problems']))"

serve:
	cd docs && python3 -m http.server 8000

pages-sync: generate
	@cp data/problems.json docs/data/problems.json
	@cp data/stats.json docs/data/stats.json 2>/dev/null || true

clean:
	find . -name '__pycache__' -type d -exec rm -rf {} + 2>/dev/null || true
