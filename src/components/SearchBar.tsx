type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

// Le champ de recherche. Le texte est gardé dans le state de la page (input contrôlé).
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search an exercise</label>
      <input
        id="search"
        type="search"
        placeholder="e.g. curl"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
