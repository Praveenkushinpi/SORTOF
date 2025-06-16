```
 ________  ________  ________  _________  ________  ________ 
|\   ____\|\   __  \|\   __  \|\___   ___\\   __  \|\  _____\
\ \  \___|\ \  \|\  \ \  \|\  \|___ \  \_\ \  \|\  \ \  \__/ 
 \ \_____  \ \  \\\  \ \   _  _\   \ \  \ \ \  \\\  \ \   __\
  \|____|\  \ \  \\\  \ \  \\  \|   \ \  \ \ \  \\\  \ \  \_|
    ____\_\  \ \_______\ \__\\ _\    \ \__\ \ \_______\ \__\ 
   |\_________\|_______|\|__|\|__|    \|__|  \|_______|\|__| 
   \|_________|                                              
                                                             

```
# SORTOF

[![Version](https://img.shields.io/badge/version-0.1.0-blue?style=flat-square)](https://github.com/yourusername/flashnote)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/yourusername/flashnote/actions)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Mobile-blueviolet?style=flat-square)](#)
[![Maintained](https://img.shields.io/badge/maintained-yes-success?style=flat-square)](#)

FlashNote is an AI-powered flashcard and note-taking application specifically built for STEM students. It provides a streamlined experience to capture quick notes, generate intelligent flashcards, and review using a spaced repetition system. Designed for mobile-first use, with rich support for math, code, and science-related content.

---

## Features

- Note editor for STEM concepts with support for math and code
- AI-powered conversion of notes into flashcards
- Manual flashcard creation and deck management
- Tagging and filtering flashcards by topic or difficulty
- Spaced repetition system for intelligent review
- AI search to find definitions, explanations, and relevant concepts
- Offline-first architecture with optional cloud sync `more focus on offline cloud sync will be optional`
- Lightweight, distraction-free UI

---

## AI Capabilities

| Capability                 | Description                                                    |
|---------------------------|----------------------------------------------------------------|
| Note to Flashcard         | Automatically generates Q&A-style flashcards from written notes |
| AI Search Integration     | Ask questions like "What is Ohm's Law?" and get concise answers |
| Context Tagging           | Extracts tags and key ideas for better organization             |
| Summarization             | Provides summaries of long notes for quick recall               |

---

## Tech Stack

- **Frontend:** React Native + TypeScript
- **Backend:** Firebase or Supabase
- **Local Storage:** SQLite or RealmDB
- **Math Rendering:** KaTeX or MathJax
- **Code Highlighting:** Prism.js
- **AI Integration:** OpenAI API or local NLP (configurable)

---

## Installation

```bash
git clone https://github.com/yourusername/SORTOF.git
cd SORTOF
npm install
npm run start
