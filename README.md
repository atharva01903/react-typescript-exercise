# Creating a react app with  react-router-dom v6 and Typescript

## Run the command
```npm start```

## Learnings:
- Typescript's strong object oriented behaviour helps a lot in maintaining type safety
- React router dom v6 just needs a single error element in root path to redirect pages for incorrect URL entry
- I find it a good practice to use event.preventDefault() on form submission
- JavaScript accepts ```const localUserData = JSON.parse(localStorage.getItem('userDataKey'));```
  whereas Typescript needs ```const localUserData = JSON.parse(localStorage.getItem('userDataKey')||'{}');``` to preserve the type safety