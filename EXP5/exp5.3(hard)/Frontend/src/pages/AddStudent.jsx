import { useState } from "react";
import { useNavigate } from "react-router";

function AddStudent({ addStudent }) {

    const navigate = useNavigate();

    // Success message state
    const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
        course: "",
        grade: "",
        status: "Active",
    });

    // Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();

        // Add student to students array
        addStudent(formData);

        // Show success animation
        setShowSuccess(true);

        // Go to student list after 1.5 seconds
        setTimeout(() => {
            navigate("/dashboard/studentlist");
        }, 1500);
    };

    return (
        <div className="form-container">

            {/* SUCCESS MESSAGE */}

            {showSuccess && (
                <div className="success-overlay">

                    <div className="success-message index-card">

                        <div className="success-icon">
                            ✓
                        </div>

                        <h3>
                            Student Added
                        </h3>

                        <p>
                            The record has been filed in the student directory.
                        </p>

                    </div>

                </div>
            )}


            {/* FORM CARD */}

            <div className="form-card index-card">

                <h2>
                    Add New Student
                </h2>

                <p className="form-subtitle">
                    Enter the student details below
                </p>


                <form onSubmit={handleSubmit}>

                    <div className="form-grid">


                        {/* NAME */}

                        <div className="form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter student name"
                                required
                            />

                        </div>


                        {/* AGE */}

                        <div className="form-group">

                            <label>
                                Age
                            </label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age"
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="form-group">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />

                        </div>


                        {/* COURSE */}

                        <div className="form-group">

                            <label>
                                Course
                            </label>

                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="e.g. B.Tech CSE"
                                required
                            />

                        </div>


                        {/* ADDRESS */}

                        <div className="form-group full-width">

                            <label>
                                Address
                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter address"
                                rows="3"
                                required
                            />

                        </div>


                        {/* GRADE */}

                        <div className="form-group">

                            <label>
                                Grade
                            </label>

                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Grade
                                </option>

                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="B-">B-</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>

                            </select>

                        </div>


                        {/* STATUS */}

                        <div className="form-group">

                            <label>
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >

                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Graduated">Graduated</option>

                            </select>

                        </div>

                    </div>


                    {/* SUBMIT BUTTON */}

                    <div className="button-container">

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={showSuccess}
                        >
                            Add Student
                        </button>

                    </div>

                </form>

            </div>


            {/* CSS */}

            <style>{`

                .form-container {
    flex: 1;
    padding: 40px;
    background: var(--bg);
}


.form-card {
    max-width: 850px;
    margin: 0 auto;
    padding: 36px;
    border-radius: var(--radius-lg);
}

.form-card h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 800;
    color: var(--ink);
    letter-spacing: -0.5px;
}

.form-subtitle {
    margin: 8px 0 30px;
    color: var(--slate);
    font-size: 14px;
}


.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.full-width {
    grid-column: 1 / -1;
}


.form-group label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink-soft);
}


.form-group input,
.form-group select,
.form-group textarea {
    padding: 13px 16px;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;
    font-family: inherit;
    background: var(--bg);
    color: var(--ink);
    box-sizing: border-box;
}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    background: var(--surface);
    border-color: var(--accent-1);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.14);
}


.form-group textarea {
    resize: vertical;
}


.button-container {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
}


.submit-btn {
    padding: 13px 28px;
    border: none;
    border-radius: 999px;
    background: var(--gradient);
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    box-shadow: var(--shadow-btn);
    transition: all 0.2s ease;
}

.submit-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 14px 28px rgba(99, 102, 241, 0.35);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}


.success-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.25s ease;
}


.success-message {
    padding: 36px 48px;
    text-align: center;
    animation: successPop 0.4s ease;
    border-radius: var(--radius-lg);
}


.success-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 16px;
    border-radius: 999px;
    background: var(--sage-bg);
    color: var(--sage);
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: checkPop 0.5s ease;
}


.success-message h3 {
    margin: 0;
    font-family: var(--font-display);
    color: var(--ink);
    font-size: 21px;
    font-weight: 800;
}


.success-message p {
    margin: 8px 0 0;
    color: var(--slate);
    font-size: 13.5px;
}


@keyframes successPop {
    0% { transform: scale(0.7); opacity: 0; }
    70% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); }
}


@keyframes checkPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}


@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}


@media (max-width: 650px) {

    .form-container {
        padding: 20px;
    }

    .form-card {
        padding: 24px;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .full-width {
        grid-column: auto;
    }

    .success-message {
        width: 80%;
        padding: 26px 20px;
    }

}

            `}</style>

        </div>
    );
}

export default AddStudent;
