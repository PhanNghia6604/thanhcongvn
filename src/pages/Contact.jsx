import React, { useState } from 'react';
import styles from './Contact.module.css'; // Import CSS module

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message from ${name} with email ${email}: ${message}`);
        // Handle form submission logic here (e.g., send to backend)
    };

    return (
        <div className={styles.contact}>
            <div>
            <div className={styles.contactInfo}>
                <h1>Liên Hệ Với Chúng Tôi</h1>
                
                <div className={styles.contactDetails}>
                    <p><strong>Địa chỉ:</strong> Đường 24A - Ấp Bình Tiền 1 - Xã Đức Hòa Hạ - Đức Hòa - Long An</p>
                    <p><strong>Số điện thoại:</strong> 0914 209 488 - 0986 391 038</p>
                    <p><strong>Email:</strong> Thanhcongvn@gmail.com</p>
                </div>
            </div>

            <div className={styles.formSection}>
                <h2>Gửi Liên Hệ</h2>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Tên của bạn:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email của bạn:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Tin nhắn:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Gửi Liên Hệ
                    </button>
                </form>
            </div>

            </div>
            <footer className={styles.footer}>
                    <div className={styles.socialIcons}>
                      <a href="https://www.facebook.com/bathanh.nguyen.7547" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
                      </a>
                      <a href="mailto:example@gmail.com">
                        <img src="https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000" alt="Email" />
                      </a>
                      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" alt="Zalo" />
                      </a>
                    </div>
                    <div className={styles.contactInfo}>
                      <p>Số điện thoại: 0914 209 488 - 0986 391 038</p>
                      <p>Designed by PhanNghia - 2025</p>
                    </div>
                  </footer>


        </div>
    );
}

export default Contact;
