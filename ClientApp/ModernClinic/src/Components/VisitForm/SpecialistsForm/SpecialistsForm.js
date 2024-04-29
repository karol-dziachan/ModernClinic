import React, {useState} from "react";
import { View, Text, TouchableOpacity } from 'react-native';

var availableTime = [
    {
        id: 1,
        date: new Date(2024, 4, 29),
        time: "10:30 - 11:30"
    },
    {
        id: 2,
        date: new Date(2024, 4, 29),
        time: "11:30 - 12:00"
    },
    {
        id: 3,
        date: new Date(2024, 4, 29),
        time: "11:45 - 12:15"
    },
    {
        id: 4,
        date: new Date(2024, 4, 30),
        time: "10:30 - 11:30"
    },
    {
        id: 5,
        date: new Date(2024, 4, 30),
        time: "12:30 - 14:30"
    },
    {
        id: 6,
        date: new Date(2024, 4, 30),
        time: "13:30 - 14:30"
    },
    {
        id: 7,
        date: new Date(2024, 4, 31),
        time: "10:30 - 11:30"
    },
    {
        id: 8,
        date: new Date(2024, 5, 1),
        time: "10:30 - 11:30"
    },
    {
        id: 9,
        date: new Date(2024, 5, 2),
        time: "10:30 - 11:30"
    },
]

const availableSpecialist =  [
    {
        id: 1, 
        availableOffers: [1, 2, 3, 4, 5],
        name: "dr Anna Lewandowska",
        availableTime: [1, 2, 3, 4, 5]
    },
    {
        id: 2, 
        availableOffers: [1, 2, 3, 4, 5],
        name: "dr Karol Dziachan",
        availableTime: [1, 2, 3, 4, 5]
    },
    {
        id: 3, 
        availableOffers: [1, 2, 3, 4, 5],
        name: "dr Oliwia Kasjaniuk",
        availableTime: [1, 2, 3, 4, 5]
    },
    {
        id: 4, 
        availableOffers: [1, 2, 3, 4, 5],
        name: "dr Tomasz Dziachan",
        availableTime: [1, 2, 3, 4, 5]
    },
]

const SpecialistsForm = ({ setSpecialist, dateId, offerId }) => {
    const [selectedSpecialist, setSelectedSpecialist] = useState(null);

    const handleSelected = (item) => {
        setSelectedSpecialist({id: item.id, name: item.name});
        setSpecialist({id: item.id, name: item.name})
    }
  const filteredSpecialists = availableSpecialist.filter((specialist) =>
    specialist.availableOffers.includes(offerId) &&
    specialist.availableTime.includes(dateId)
  );

  return (
    <View style={{paddingLeft: 20}}>
      {!dateId && <Text style={{fontSize: 12}}>Musisz najpierw wybrać przedział czasowy</Text>}
      
      {!offerId && <Text style={{fontSize: 12}}>Musisz najpierw wybrać usługę do wykonania</Text>}

      {filteredSpecialists.length > 0 ? (
        <View>
          <Text tyle={{fontSize: 14, marginBottom: 10}}>Wybierz specjalistę:</Text>
          {filteredSpecialists.map((specialist) => (
            <TouchableOpacity
              key={specialist.id}
              style={{ padding: 2, marginVertical: 2, 
                backgroundColor: selectedSpecialist && selectedSpecialist === specialist.id ? '#17B5FF' : 'white',
                 }}
              onPress={() => handleSelected(specialist)}>
              <Text
              style= {{
                fontSize: 12,
                color: selectedSpecialist && selectedSpecialist === specialist.id ? 'white' : 'black',
              }}
              >{specialist.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={{fontSize: 12}}>Brak dostępnych specjalistów dla wybranej daty i usługi</Text>
      )}
    </View>
  );
};

export default SpecialistsForm;