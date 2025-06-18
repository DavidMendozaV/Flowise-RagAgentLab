# Flowise-RagAgentLab 🤖

**RAG Agent ** es una aplicación basada en agentes colaborativos de inteligencia artificial, diseñada para transformar documentos PDF en conocimiento estructurado, contenido creativo y resúmenes inteligentes. 

Construido con [FlowiseAI](https://flowiseai.com/), este proyecto integra capacidades de **Retrieval-Augmented Generation (RAG)**, dividiendo, embebiendo y recuperando texto de forma inteligente con herramientas modernas como `RecursiveCharacterTextSplitter`, `In-Memory Vector Store` y `Retriever Tool`, además de usar `OpenAI GPT-4o` como modelo base.

---

## 📦 Estructura del proyecto

```
rag-agent-knowledge-pipeline/
├── .gitignore
├── LICENSE
├── README.md
│
├── flowise/
│   └── agent/
│       └── rag_pipeline_agent.json
│
├── app/
│   ├── main.py
│   ├── main.ks
│   ├── curl.txt
│   ├── Embed/
│       ├── Fullpage-Html.html
│       ├── Fullpage-React.jsx
│       ├── PopUp-Html.js
│       └── PopUp-React.jsx
│
└── docs/
│   └── screenshots/
│       └── flow-diagram.png

```

---

## 🧠 Arquitectura y componentes

### 🪓 Text Splitting

- **`RecursiveCharacterTextSplitter`**: Fragmenta el contenido de los PDFs en bloques optimizados para embeddings, respetando estructura y contexto.

### 📦 Vector Store

- **`In-Memory Vector Store`**: Almacena vectores en memoria con acceso ultra rápido.
- **`OpenAIEmbeddings`**: Usa el modelo `text-embedding-ada-002` para convertir texto en vectores semánticos.

### 🔍 Recuperación

- **`Retriever Tool`**: Permite que los agentes recuperen información contextual desde los vectores embebidos.

### 💬 Conexión con modelo de lenguaje

- **`ChatOpenAI` (GPT-4o)**: Todos los agentes se comunican con GPT-4o para procesar, crear y resumir el conocimiento.

### 🧩 Agentes IA

- **Supervisor**: Orquesta el flujo lógico del sistema.
- **Knowledge Explorer**: Extrae datos clave desde los PDFs.
- **Content Creator**: Redacta un blog post y 5 tweets.
- **Summary Specialist**: Resume toda la conversación y guarda el resultado.

---

## 🛠️ Tecnologías

| Componente       | Herramienta                         |
|------------------|--------------------------------------|
| Framework visual | FlowiseAI                           |
| LLM              | OpenAI GPT-4o                        |
| Splitting        | RecursiveCharacterTextSplitter       |
| Embeddings       | text-embedding-ada-002               |
| Vector DB        | In-Memory Vector Store               |
| Recuperación     | LangChain Retriever Tool             |
| Pipeline         | Supervisor + Agentes especializados  |
| Backend opcional | Python + FastAPI                     |

---

## ⚙️ Cómo usar

1. Inicia Flowise y accede a la interfaz web.
2. Importa el archivo:
   ```
   flowise/agents/rag_pipeline_agent.json
   ```
3. Coloca tus documentos PDF en:
   ```
   data/sample_docs/
   ```
4. Flowise ejecutará automáticamente el pipeline:

   - Divide el texto con `RecursiveCharacterTextSplitter`
   - Embebe con `OpenAIEmbeddings`
   - Guarda vectores en `In-Memory Vector Store`
   - Recupera con `Retriever Tool`
   - Procesa con agentes vía `ChatOpenAI`
   - Escribe resultados en `output/summaries/`

---

## 📸 Diagrama del flujo

![Flujo de Agentes en Flowise](docs/screenshots/flow-diagram.png)

---

## 💡 Nota

Este repositorio demuestra cómo los agentes pueden colaborar para procesar y generar contenido a partir de documentos usando técnicas modernas de IA generativa y recuperación semántica.
