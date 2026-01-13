# Coach Lumi™ - Voice Therapy Companion

<div align="center">
  <h3>Professional, Empathic, AI-Powered Voice Therapy</h3>
  <p>A premium voice therapy application powered by Hume AI's Empathic Voice Interface (EVI). Designed with a focus on calmness, empathy, and professional care.</p>
</div>

## ✨ Features

- **Empathic Voice Interface**: Real-time, voice-based therapy sessions with emotional intelligence.
- **Therapeutic UI/UX**: A calming "Meet Coach Lumi" experience using a Teal & Gold palette.
- **Live Expression Analysis**: Visualizes emotional nuance during conversations.
- **Secure & Private**: Built with privacy in mind.

## 🚀 Getting Started

Follow these instructions to set up and run the Coach Lumi application on your local machine.

### Prerequisites

- **Node.js** (v18.17.0 or later)
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **Hume AI Account**: You need an account at [portal.hume.ai](https://portal.hume.ai) to generate API keys.

### 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd lumi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

### 🔑 Configuration

1. **Set up Environment Variables:**
   
   Duplicate the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. **Add your Hume Credentials:**
   
   Open `.env.local` and fill in your keys from the [Hume API Keys Page](https://portal.hume.ai/settings/keys):

   ```env
   # Your Hume API Key
   HUME_API_KEY=your_api_key_here

   # Your Hume Secret Key
   HUME_SECRET_KEY=your_secret_key_here

   # (Optional) Your Custom EVI Configuration ID
   # If you have customized the prompt/voice in Hume Portal
   NEXT_PUBLIC_HUME_CONFIG_ID=your_config_id_here
   ```

### 🏃‍♂️ Running Locally

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to meet Coach Lumi.

## 📚 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **AI**: [Hume AI](https://hume.ai/) (EVI SDK)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Support

For any issues related to the Hume API, refer to the [Hume Docs](https://hume.docs.buildwithfern.com/docs/empathic-voice-interface-evi/overview).
