// Profile.js
import React from 'react';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto mt-8 max-w-lg">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
                <div className="flex items-center space-x-4">
                    <img
                        src="https://placekitten.com/100/100"  // Replace with your profile image URL
                        alt="Profile"
                        className="rounded-full w-16 h-16"
                    />
                    <div>
                        <p className="text-lg font-semibold">Your Name</p>
                        <p className="text-gray-500">Web Developer</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Bio</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <ul>
                        <li className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 13.255A10.942 10.942 0 0 1 12 24a10.942 10.942 0 0 1-9-4.745M19.926 2.07a16.634 16.634 0 0 1-3.74.774 1.999 1.999 0 0 0-1.725-2.352A9.982 9.982 0 0 0 12 0C6.48 0 2.453 3.686 1.02 8.566a1.999 1.999 0 0 0 .475 2.026 17.039 17.039 0 0 1-1.646 4.536 1.992 1.992 0 0 0 .553 2.376 11.025 11.025 0 0 0 15.053-.582 2.001 2.001 0 0 0 2.562-1.572c.512-2.619.303-5.298-.682-7.676zM14.5 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                            <span>Email: your.email@example.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 4v6a1 1 0 0 0 1 1h13.5M21 12v-2a4 4 0 0 0-4-4H5m16 0v6a1 1 0 0 1-1 1H5m4 0a2 2 0 0 1 2-2h7.5M6 16h8.5m-2 4l2-2m-2 2l2-2m-2 2l2-2"
                                />
                            </svg>
                            <span>Phone: +1 123-456-7890</span>
                        </li>
                    </ul>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gree-600 MT-4"
                        onClick={() => navigate('/update')}
                    >
                        Modify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
