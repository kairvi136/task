import React, { useState } from 'react';

const FamilyInputForm = ({ onAddMember, onEditMember, onDeleteMember }) => {
  const [memberName, setMemberName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddMember = () => {
    if (memberName) {
      if (editMode) {
        onEditMember(editIndex, memberName);
        setEditMode(false);
        setEditIndex(null);
      } else {
        onAddMember(memberName);
      }
      setMemberName('');
    }
  };

  const handleEditClick = (index, name) => {
    setMemberName(name);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    onDeleteMember(index);
    setEditMode(false);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditIndex(null);
    setMemberName('');
  };

  return (
    <div className="FamilyInputForm">
      <input
        type="text"
        placeholder="Enter family member's name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />
      <button onClick={handleAddMember}>{editMode ? 'Save' : 'Add Member'}</button>
      {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
      {editMode || <button onClick={() => handleEditClick()}>Edit</button>}
      {editMode || <button onClick={() => handleDeleteClick()}>Delete</button>}
    </div>
  );
};

export default FamilyInputForm;
