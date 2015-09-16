index page will create a list of the client's keywords
- in real-life use, keywords will be pulled by API from Google AdWords
- in demo-use, keywords will be pulled from seeds file in the app
- threshold reference, in this case a cost per conversion value, will be entered by the client and will persist in the app until the client revises it

keywords will derive their colors from css
- css logic will determine color by comparing keyword's actual cost per conversion to threshold reference
  - if actual is more than 10% above threshold, keyword color will be green
  - if actual is between 10% above and 10% below threshold, keyword color will be yellow
  - if actual is more than 10% below threshold, keyword color will be red
