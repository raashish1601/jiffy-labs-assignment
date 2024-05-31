import React, { useEffect, useState } from "react";
import UserProfileDropDown from "./UserProfileDropDown";
import { useAuth } from "@/context/auth-context";
import { getInitials } from "@/utils";
import styles from './UserProfile.module.scss';

function UserProfile() {
    const { user } = useAuth();
    const [initials, setInitials] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    useEffect(() => {
        if (user) {
            const userInitials = getInitials(user?.full_name);
            setInitials(userInitials);
        }
    }, [user]);

    return (
        <>
            <div className={styles['profileContainer']} onClick={toggleDropdown}>
                <div>
                    <div className={styles['profileContainer_initials']}>
                        {initials}
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
        </>
    );
}

export default UserProfile;
