# Synopsis

The goal of this project is to create a free, open source, modern, mobile-friendly and interactive introduction page for the game of Go.  
All other currently existing solutions are either technologically outdated or are incomplete/static.

# Tasks

Primary:

- [x] Implement i18n
- [ ] Implement the board with PIXI
- [ ] Write the guide
- [x] Add the design
- [x] Implement the day/night mode switch
- [ ] Properly stylize the language select box (use a library)

Secondary:

- [ ] Pause the PIXI rendering when not in frame (scrolled past)
- [ ] Use cookies to remember the language
- [ ] Use cookies to remember the theme
- [ ] Make languages linkable (url param)
- [ ] Add social buttons
- [ ] Make chapters linkable (dynamic url hash as you scroll?)

# Contribution

## Code

- `npm run start` for dev serve+watch

- `npm run rebuild` for a clean prod rebuild

- `npm run i18n` to generate i18n files

## Translations

Translation files are located at `src/i18n/`.  
Submit a pull request and the translation will be added after a review.