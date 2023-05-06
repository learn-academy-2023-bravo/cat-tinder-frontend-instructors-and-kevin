## Notes

- Fetch to connect
- is a method that takes 2 arg url/location and possibly data

Fetch returns a promise
  - object represents eventual completion/failure of an async operation
   3 State:
   - starts as pending 
   - can become fulfilled - it worked! we get payload
   - can be rejected - something went wrong  (aka broken promise, here in Bravo only)

   