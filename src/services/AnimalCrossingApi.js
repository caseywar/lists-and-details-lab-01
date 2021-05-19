export const fetchVillagers = async () => {
    const res = await fetch('https://ac-vill.herokuapp.com/villagers');
    const villagers = await res.json();

    return villagers.map((villager) => ({
        id: villager._id,
        image: villager.image,
        name: villager.name,
        personality: villager.personality,
        quote: villager.quote
    }))
}


export const findVillagerById = async (id) => {
    const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  
    const villager = await res.json();
    return villager;
  };
  