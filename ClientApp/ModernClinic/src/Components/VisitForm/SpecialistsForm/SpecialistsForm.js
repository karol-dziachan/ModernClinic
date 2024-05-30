import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import ApiClient from "../../../ApiClient/ApiClient";
import Loader from "../../Atoms/Loader/Loader";

const SpecialistsForm = ({ setSpecialist, offerId }) => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [availableSpecialist, setAvailableSpecialist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredSpecialists, setFilteredSpecialists] = useState([]);
  const apiClient = new ApiClient();

  useEffect(async () => {
    try {
      const data = await apiClient.get('/api/doctors/available-specialists');
      setAvailableSpecialist(data);
      const tmpfilteredSpecialists = data.filter(specialist =>
        specialist.availableOffers.includes(offerId)
      );
      setFilteredSpecialists(tmpfilteredSpecialists)
      setLoading(false);


    } catch (error) {
      console.error('Error during fetching data (SpecialistsForm):', error);
    }
  }, []
  );

  const handleSelected = (item) => {
    setSelectedSpecialist({ id: item.id, name: item.name });
    setSpecialist({ id: item.id, name: item.name })
  }

  return (!loading ?
    <View style={{ paddingLeft: 20 }}>

      {!offerId && <Text style={{ fontSize: 12 }}>Musisz najpierw wybrać usługę do wykonania</Text>}

      {filteredSpecialists.length > 0 ? (
        <View>
          <Text tyle={{ fontSize: 14, marginBottom: 10 }}>Wybierz specjalistę:</Text>
          {filteredSpecialists.map((specialist) => (
            <TouchableOpacity
              key={specialist.id}
              style={{
                padding: 2, marginVertical: 2,
                backgroundColor: selectedSpecialist && selectedSpecialist === specialist.id ? '#17B5FF' : 'white',
              }}
              onPress={() => handleSelected(specialist)}>
              <Text
                style={{
                  fontSize: 12,
                  color: selectedSpecialist && selectedSpecialist === specialist.id ? 'white' : 'black',
                }}
              >{specialist.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={{ fontSize: 12 }}>Brak dostępnych specjalistów dla wybranej  usługi</Text>
      )}
    </View>
    : <Loader />

  );
};

export default SpecialistsForm;