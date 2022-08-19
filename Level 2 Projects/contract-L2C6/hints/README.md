## Informational Hint

### Time Units

Ref: https://docs.soliditylang.org/en/v0.8.16/units-and-global-variables.html#time-units

Suffixes like seconds, minutes, hours, days and weeks after literal numbers can be used to specify units of time where seconds are the base unit and units are considered naively in the following way:

```
1 == 1 seconds
1 minutes == 60 seconds
1 hours == 60 minutes
1 days == 24 hours
1 weeks == 7 days
```

Online UNIX timestamp: https://www.unixtimestamp.com/

To get current time, `block.timestamp` can be used being aware about the fact that it can be influenced by miners to some degree. It returns `uint`.
Note: `now` for getting the current time is depreciated.
