import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import ApiClient from '../../../ApiClient/ApiClient';

const VisitDateTimePicker = ({ setDate, setTime, doctorId }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTime, setAvailableTine] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiClient = new ApiClient();

  useEffect(async () => {
    try {
      const data = await apiClient.get('/api/time-table/available-time-table/' + doctorId);
      setAvailableTine(data);
      setLoading(false);
    } catch (error) {
      console.error('Error durring fetching data (VisitDateTimePicker):', error);
    }
  }, []
  );

  const uniqueDates = Array.from(
    new Set(availableTime.map(item => new Date(item.date).getTime()))
  ).map(time => new Date(time));

  const handleDateSelect = (date) => {
    setDate(date);
    setTime(null);
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (item) => {
    setSelectedTime({ time: item.time, id: item.id });
    setTime({ time: item.time, id: item.id });
  };

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: selectedTime && selectedTime.time && selectedTime.time === item.time ? '#17B5FF' : 'white',
      }}
      onPress={() => handleTimeSelect(item)}>
      <Text
        style={{
          color: selectedTime && selectedTime.time && selectedTime.time === item.time ? 'white' : 'black',
        }}
      >{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingLeft: 20 }}>
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 10 }}>Data:</Text>
      <FlatList
        horizontal
        data={uniqueDates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: selectedDate && selectedDate.toLocaleDateString('en-GB') === item.toLocaleDateString('en-GB') ? '#17B5FF' : 'white',
            }}
            onPress={() => handleDateSelect(item)}>
            <Text
              style={{
                color: selectedDate && selectedDate.toLocaleDateString('en-GB') === item.toLocaleDateString('en-GB') ? 'white' : 'black',
              }}>{item.toLocaleDateString('en-GB')}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedDate && (
        <>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginVertical: 10 }}>Przedział godzinowy:</Text>
          <FlatList
            data={availableTime.filter(item => new Date(item.date).getTime() === new Date(selectedDate).getTime())}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTimeItem}
          />
        </>
      )}
    </View>
  );
};

export default VisitDateTimePicker;