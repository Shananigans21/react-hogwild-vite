function AddHogForm({ onAddHog }) {
    const [newHog, setNewHog] = useState({ name: '', image: '', weight: '', specialty: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewHog({ ...newHog, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddHog(newHog);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={newHog.name} onChange={handleChange} />
  
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" value={newHog.image} onChange={handleChange} />
  
        <label htmlFor="weight">Weight:</label>
        <input type="text" name="weight" value={newHog.weight} onChange={handleChange} />
  
        <label htmlFor="specialty">Specialty:</label>
        <input type="text" name="specialty" value={newHog.specialty} onChange={handleChange} />
  
        <button type="submit">Add Hog</button>
      </form>
    );
  }
  