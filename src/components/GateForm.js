import React from 'react';

const GateForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <h2>Create Gate</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Gate Name"
                    value={formData.name}  // Use formData passed from AdminPage
                    onChange={handleChange}  // Use handleChange passed from AdminPage
                    required
                />
                <input
                    type="text"
                    name="terminal"
                    placeholder="Terminal"
                    value={formData.terminal}  // Use formData passed from AdminPage
                    onChange={handleChange}  // Use handleChange passed from AdminPage
                    required
                />
                <button type="submit">Create Gate</button>
            </form>
        </>
    );
};

export default GateForm;