import React from "react";

export function SomeComponent({ age, name }) {
  const [newName, setNewName] = React.useState(name);

  const handleChange = React.useCallback((event) => {
    const { value } = event.currentTarget;

    if (name.length > 0) {
      console.log(newName, value); // eslint-disable-line no-console
    }

    setNewName(name);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>age: {age}</h1>
      <h2>initialName: {name}</h2>
      <input type="text" value={newName} onChange={handleChange} />
    </div>
  );
}
