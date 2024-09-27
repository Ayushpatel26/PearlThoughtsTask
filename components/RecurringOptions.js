import React from 'react';
import { useRecurrenceStore } from '../stores/recurrenceStore';

const RecurringOptions = () => {
  const {
    recurrenceType,
    setRecurrenceType,
    setCustomInterval,
    customValue,
    customUnit,
    setCustomValue,
    setCustomUnit,
  } = useRecurrenceStore();

  const handleCustomChange = () => {
    setCustomInterval({ value: customValue, unit: customUnit });
  };

  return (
    <div className="flex flex-col space-y-2 mb-2">
      <label>Repeat</label>
      <select
        className="border p-2"
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        <option value="custom">Custom</option>
      </select>

      {recurrenceType === 'custom' && (
        <div className="flex space-x-2 mt-2">
          <input
            type="number"
            className="border p-2 w-16"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            min="1"
          />
          <select
            className="border p-2"
            value={customUnit}
            onChange={(e) => setCustomUnit(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
          <button
            className="px-2 py-0 bg-blue-500 text-white rounded"
            onClick={handleCustomChange}
          >
            Set
          </button>
        </div>
      )}
    </div>
  );
};

export default RecurringOptions;
