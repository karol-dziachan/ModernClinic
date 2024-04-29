import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

var availableTime = [
    {
        id: 1,
        doctorId: 1, 
        date: new Date(2024, 4, 29),
        time: "10:30 - 11:30"
    },
    {
        id: 2,
        doctorId: 1, 
        date: new Date(2024, 4, 29),
        time: "11:30 - 12:00"
    },
    {
        id: 3,
        doctorId: 1, 
        date: new Date(2024, 4, 29),
        time: "11:45 - 12:15"
    },
    {
        id: 4,
        doctorId: 1, 
        date: new Date(2024, 4, 30),
        time: "10:30 - 11:30"
    },
    {
        id: 5,
        doctorId: 1, 
        date: new Date(2024, 4, 30),
        time: "12:30 - 14:30"
    },
    {
        id: 6,
        doctorId: 1, 
        date: new Date(2024, 4, 30),
        time: "13:30 - 14:30"
    },
    {
        id: 7,
        doctorId: 1, 
        date: new Date(2024, 4, 31),
        time: "10:30 - 11:30"
    },
    {
        id: 8,
        doctorId: 1, 
        date: new Date(2024, 5, 1),
        time: "10:30 - 11:30"
    },
    {
        id: 9,
        doctorId: 1, 
        date: new Date(2024, 5, 2),
        time: "10:30 - 11:30"
    },

]

const VisitDateTimePicker = ({setDate, setTime}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const uniqueDates = Array.from(
    new Set(availableTime.map(item => item.date.getTime()))
  ).map(time => new Date(time));
  console.log(uniqueDates)

  const handleDateSelect = (date) => {
    setDate(date);
    setTime(null);
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (item) => {
    setSelectedTime({time: item.time, id: item.id});
    setTime({time: item.time, id: item.id});
  };

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: selectedTime && selectedTime.time &&  selectedTime.time === item.time ? '#17B5FF' : 'white',
      }}
      onPress={() => handleTimeSelect(item)}>
      <Text
    style={{
        color:  selectedTime && selectedTime.time && selectedTime.time === item.time ? 'white' : 'black',
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
        color:   selectedDate && selectedDate.toLocaleDateString('en-GB') === item.toLocaleDateString('en-GB') ?  'white' : 'black',
      }}>{item.toLocaleDateString('en-GB')}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedDate && (
        <>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginVertical: 10 }}>Przedział godzinowy:</Text>
          <FlatList
            data={availableTime.filter(item => item.date.getTime() === selectedDate.getTime())}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTimeItem}
          />
        </>
      )}
    </View>
  );
};

export default VisitDateTimePicker;