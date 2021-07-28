# WhatsappChatConverter

> Converts Whatsapp chat export to multiple formats (CSV, JSON and HTML formatted charts) for analysis

## Why

If you want to analyse the full content of a Whatsapp chat export,  WhatsappChatConverter can help you by generating multiple exports of the content.
The app will generate multiple export formats so you can read the data in multiple ways.

## Installation

Download the files from the [releases page](https://github.com/russoedu/WhatsappChatConverter/releases) and run the executable in the same folder you have your chat export.

## Usage

Double click on the app or execute on a terminal window.

## Exports

⚠️ All export dates are formatted as dd/mm/yyyy!

### result.json
A JSON file with all messages in a better formatted way and a characters count.
```
[
  {
    "date": "23/02/2014 23:58:36",
    "contact": "John Doe",
    "content": "Hello there",
    "chars": 11
  },
  {
    "date": "24/02/2014 00:11:31",
    "contact": "Mary Jane",
    "content": "😄",
    "chars": 1
  },
  {
    "date": "24/02/2014 00:27:35",
    "contact": "Paul Roberts",
    "content": "How are you guys?",
    "chars": 17
  },
  {
    "date": "24/02/2014 00:31:23",
    "contact": "Mary Jane",
    "content": "I'm doing great, thanks! And you?",
    "chars": 33
  },
  .
  .
  .
]
```

### result.csv

A CSV file with all messages in a better formatted way and a characters count. Easy to open in any spreadsheet app.

```
"date","contact","content","chars"
"23/02/2014 23/02/2014 23:58:36","John Doe","Hello there","11"
"24/02/2014 00:11:31","Mary Jane","😄","1"
"24/02/2014 00:27:35","Paul Roberts","How are you guys?","17"
"24/02/2014 00:31:23","Mary Jane","I'm doing great, thanks! And you?","33"
.
.
.
```

### result-day.json

A JSON summarising each day with the count of messages and chars per person.

```
[
  {
    "date": "23/02/2014",
    "John_Doe_Chars": 11,
    "John_Doe_Messages": 1,
    "Mary_Jane_Chars": 0,
    "Mary_Jane_Messages": 0,
    "Paul_Roberts_Chars": 0,
    "Paul_Roberts_Messages": 0
  },
  {
    "date": "24/02/2014",
    "John_Doe_Chars": 0,
    "John_Doe_Messages": 0,
    "Mary_Jane_Chars": 34,
    "Mary_Jane_Messages": 2,
    "Paul_Roberts_Chars": 17,
    "Paul_Roberts_Messages": 1
  },
  .
  .
  .
]
```

### result-month.json

A JSON summarising each month with the count of messages and chars per person.

```
[
  {
    "date": "02/2014",
    "John_Doe_Chars": 48,
    "John_Doe_Messages": 7,
    "Mary_Jane_Chars": 136,
    "Mary_Jane_Messages": 14,
    "Paul_Roberts_Chars": 238,
    "Paul_Roberts_Messages": 16
  },
  {
    "date": "03/2014",
    "John_Doe_Chars": 132,
    "John_Doe_Messages": 16,
    "Mary_Jane_Chars": 145,
    "Mary_Jane_Messages": 13,
    "Paul_Roberts_Chars": 328,
    "Paul_Roberts_Messages": 21
  },
  .
  .
  .
]
```

### result-year.json

A JSON summarising each year with the count of messages and chars per person.

```
[
  {
    "date": "2014",
    "John_Doe_Chars": 15368,
    "John_Doe_Messages": 462,
    "Mary_Jane_Chars": 13295,
    "Mary_Jane_Messages": 514,
    "Paul_Roberts_Chars": 31425,
    "Paul_Roberts_Messages": 792
  },
  {
    "date": "2015",
    "John_Doe_Chars": 18415,
    "John_Doe_Messages": 912,
    "Mary_Jane_Chars": 18068,
    "Mary_Jane_Messages": 751,
    "Paul_Roberts_Chars": 36525,
    "Paul_Roberts_Messages": 1082
  },
  .
  .
  .
]
```

### chart-day.html

A chart summarising each day with the count of messages and chars per person.

![chart-day.html](https://github.com/russoedu/WhatsappChatConverter/blob/gh-pages/chart-day.png?raw=true)

### chart-month.html

A chart summarising each month with the count of messages and chars per person.

![chart-month.html](https://github.com/russoedu/WhatsappChatConverter/blob/gh-pages/chart-month.png?raw=true)

### chart-year.html

A chart summarising each year with the count of messages and chars per person.

![chart-year.html](https://github.com/russoedu/WhatsappChatConverter/blob/gh-pages/chart-year.png?raw=true)

## License

MIT &copy; [Eduardo Russo]()
