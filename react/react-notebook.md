# React Notebook
This is my personal memo about React.

---

# Basics
- Components Idea
- Client-Server Rendering
- JSX/TSX

# Hooks
- `useState`
- `useEffect`
- context

## useState

## useEffect

```javascript
const [templates, setTemplates] = useState([])

useEffect(() => {
  const fetchTemplates = async () => {
    const data = await fetch('localhost:8080/api/v1/templates')
    const response = await data.json()
    setTemplates(response)
  }

  fetchTemplates()
}, [])
```
