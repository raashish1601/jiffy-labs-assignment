import React, { useEffect, useState, useRef } from "react";
import UserProfileDropDown from "./UserProfileDropDown";
import { useAuth } from "@/context/auth-context";
import { getInitials } from "@/utils";
import styles from './UserProfile.module.scss';
import Image from "next/image";

function UserProfile() {
    const { user } = useAuth();
    const [initials, setInitials] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const profileRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        if (user) {
            const userInitials = getInitials(user?.full_name);
            setInitials(userInitials);
        }
    }, [user]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={profileRef} className={styles['profileContainer']} onClick={toggleDropdown}>
            <div>
                <div className={styles['profileContainer_initials']}>
                    {initials}
                    <Image src="/assets/icons/online.svg" alt="dashboard" width={10.67} height={10.67} />
                </div>
            </div>
            <div className={styles['profileContainer_info']}>
                <div className={styles['profileContainer_info--name']}>
                    {user?.full_name}
                </div>
                <div className={styles['profileContainer_info--email']}>
                    {user?.email}
                </div>
            </div>
            {dropdownVisible && <UserProfileDropDown />}
        </div>
    );
}

export default UserProfile;
