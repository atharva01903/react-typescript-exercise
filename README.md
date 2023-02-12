# Creating a react app with  react-router-dom v6 and Typescript

## Run the command
```npm start```

## Learnings:
- Typescript's Object oriented features helps a lot in type safety
- React router v6 just needs one error element in root path to redirect pages for incorrect URL entry
- Good practice to use event.preventDefault() on form submission
- JavaScript accepts ```const localUserData = JSON.parse(localStorage.getItem('userDataKey'));```
  whereas Typescript needs ```const localUserData = JSON.parse(localStorage.getItem('userDataKey')||'{}');```