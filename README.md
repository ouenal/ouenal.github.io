# Ozan Ünal

Personal website: https://ouenal.github.io

The homepage contains expandable News, Papers, Patents, and CV sections. Five highlighted papers retain dedicated project pages.

## Preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000. On Windows, add `--force_polling` if file watching requires it.

## Content

- `_pages/about.md`: introduction and homepage structure.
- `_data/news.yml`, `_data/publications.yml`, `_data/patents.yml`: public listings, ordered oldest to newest for papers and patents.
- `_includes/cv-section.html`: public CV titles and dates.
- `_projects/`: dedicated research project pages.
- `assets/css/minimal.css` and `assets/js/minimal.js`: homepage styling and animations.

GitHub Pages builds the `main` branch. The previous design remains in Git history; no legacy theme or separate listing pages are part of the current site.

The research project pages preserve their original template attribution and license notices. Third-party asset notices remain in their source files.
