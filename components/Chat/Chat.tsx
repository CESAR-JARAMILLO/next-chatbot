'use client';
 
import { Avatar, Box, Button, Divider, List, Text, Textarea } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';
import { useChat } from 'ai/react';
import styles from './Chat.module.css';
import { useEffect, useState } from 'react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [initialMessageDisplayed, setInitialMessageDisplayed] = useState(false);

  useEffect(() => {
    if (!initialMessageDisplayed) {
      setTimeout(() => {
        setInitialMessageDisplayed(true);
      }, 500);
    }
  }, []);

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit(event);
    }
  };
 
  return (
    <Box className={styles.chatContainer}>
      <Box className={styles.header}>
        <Avatar src={'/image-victoria.jpg'} size="lg" radius="xl" alt="AI" />
        <Box className={styles.headerTextContainer}>
          <Text className={styles.headerText}>Chat with</Text>
          <Text className={styles.headerText}>AI Agent</Text>
        </Box>
      </Box>

      <Box className={styles.messageContainer}>
        {initialMessageDisplayed && (
          <Text className={styles.aiMessage}>
            Hello! How can I assist you today?
          </Text>
        )}
        {messages.map((m, index) => (
          <Text key={index} className={m.role === 'user' ? styles.userMessage : styles.aiMessage}>
            {m.content}
          </Text>
        ))}
      </Box>
 
      <form onSubmit={handleSubmit}>
        <Divider />
        <Box className={styles.inputConatiner}>
          <Textarea
            className={styles.textarea}
            placeholder="Type your message..."
            value={input} 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            classNames={{ root: styles.buttonRoot }}
            type="submit"
          >
            <IconSend2 />
          </Button>
        </Box>
      </form>
    </Box>
  );
}