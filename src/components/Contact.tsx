import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactLinks = [
  {
    id: 'email',
    icon: <EmailIcon />,
    label: 'Email',
    value: 'vi*****@gmail.com', // Masked email
    href: 'mailto:vishnuanil23@gmail.com',
    color: '#7c3aed',
  },
  {
    id: 'linkedin',
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'in/vishnu-ma', // Shortened
    href: 'https://www.linkedin.com/in/vishnu-ma/',
    color: '#0077b5',
  },
  {
    id: 'github',
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github/vishnuanil23', // Shortened
    href: 'https://github.com/vishnuanil23',
    color: '#a78bfa',
  },
  {
    id: 'location',
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Kochi, India', // Shortened
    href: '#',
    color: '#f59e0b',
  },
];

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const form = useRef<any>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const hasError = name === '' || email === '' || message === '';
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    if (!hasError) {
      setSent(true);
      setName(''); setEmail(''); setMessage('');
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('vishnuanil23@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" ref={ref}>
      <div className="contact-section">
        {/* Left */}
        <div className="contact-info reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's build something<br />
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="contact-tagline">
            Whether you have a project in mind, want to discuss a collaboration,
            or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-links">
            {contactLinks.map((link, i) => {
              const isEmail = link.id === 'email';
              return (
                <a
                  key={i}
                  href={isEmail ? '#' : link.href}
                  onClick={isEmail ? handleEmailClick : undefined}
                  target={!isEmail && link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-link-item"
                  style={{ '--link-color': link.color } as React.CSSProperties}
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: `${link.color}15`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">
                      {isEmail && copied ? 'Copied to clipboard!' : link.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap glass-card reveal reveal-delay-2">
          {sent ? (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="btn-secondary" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <>
              <h3 className="form-title">Send a message</h3>
              <Box
                ref={form}
                component="form"
                noValidate
                autoComplete="off"
                className="contact-form"
              >
                <div className="form-row">
                  <TextField
                    required
                    id="contact-name"
                    label="Your Name"
                    placeholder="Vishnu M A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    helperText={nameError ? 'Please enter your name' : ''}
                    fullWidth
                    sx={textFieldSx}
                  />
                  <TextField
                    required
                    id="contact-email"
                    label="Email / Phone"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    helperText={emailError ? 'Please enter your contact' : ''}
                    fullWidth
                    sx={textFieldSx}
                  />
                </div>
                <TextField
                  required
                  id="contact-message"
                  label="Message"
                  placeholder="Tell me about your project or inquiry..."
                  multiline
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={messageError}
                  helperText={messageError ? 'Please enter your message' : ''}
                  fullWidth
                  sx={textFieldSx}
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={sendEmail}
                  className="contact-send-btn"
                  fullWidth
                >
                  Send Message
                </Button>
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '12px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(124,58,237,0.4)' },
    '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#7c3aed' },
  '& .MuiOutlinedInput-input': { color: 'white' },
};

export default Contact;