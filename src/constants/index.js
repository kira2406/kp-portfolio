import UBLogo from "./../assets/ub_logo.png";
import JSSLogo from "./../assets/jssate_logo.jpg";
import CTSLogo from "./../assets/cts_logo.jpg";
import PythonLogo from "./../assets/python.jpg";
import JSLogo from "./../assets/javascript.jpg";
import SQLLogo from "./../assets/sql.png";
import ReactLogo from "./../assets/react.png";
import ReduxLogo from "./../assets/redux.png";
import NodeLogo from "./../assets/node.png";
import DJangoLogo from "./../assets/django.svg";
import NepAILogo from "./../assets/neptune_ai.png";
import KerasLogo from "./../assets/keras.png";
import PyTorchLogo from "./../assets/pytorch.png";
import TFLogo from "./../assets/tensorflow.png";
import MLFlowLogo from "./../assets/mlflow.png";
import PostGreSQLLogo from "./../assets/postsql.png";
import MySQLLogo from "./../assets/mysql.png";
import MongoLogo from "./../assets/mongodb.png";
import FirebaseLogo from "./../assets/firebase.jpg";
import SKLearnLogo from "./../assets/sklearn.png"
import PokereignsThumb from "./../assets/pokereigns.png"


export const events = [
    {
        heading: "SUNY Buffalo, New York",
        year: "2024 - Present",
        course: "MS in Computer Science",
        description: "AI/ML Track",
        logo: UBLogo,
        direction: "left"
    },
    {
        heading: "Cognizant Technology Solutions",
        year: "2021 - 2024",
        course: "Business Analyst, React Developer",
        description: "Utilized React and Redux to build dynamic web applications. Implemented lazy loading to enhance performance and user experience",
        logo: CTSLogo,
        direction: "left"
    },
    {
        heading:    "JSS Academy of Technical Education",
        year: "2017 - 2021",
        course: "Bachelor of Engineering",
        description: "Information Science",
        logo: JSSLogo,
        direction: "left"
    },
]

export const skills = [
    {
        heading: "Programming Languages",
        tech: [
            {
                logo:PythonLogo,
                desc:"Python"
            },
            {
                logo: JSLogo,
                desc:"JavaScript"
            },
            {
                logo: SQLLogo,
                desc:"SQL"
            }
        ]
    },
    {
        heading: "Data Science & Analytics",
        tech: [
            {
                logo: null,
                desc: "Data Preprocessing"
            },
            {
                logo: null,
                desc:"Pandas"
            },
            {
                logo: null,
                desc:"Numpy"
            },
            {
                logo: null,
                desc:"Matplotlib"
            },
            {
                logo: null,
                desc:"Apache Spark"
            },
            {
                logo: null,
                desc:"Hadoop"
            }
        ]
    },
    {
        heading: "Machine Learning & AI",
        tech: [
            {
                logo: null,
                desc:"Supervised Learning"
            },
            {
                logo: null,
                desc:"Unsupervised Learning"
            },
            {
                logo: null,
                desc:"Deep Learning (CNNs, RNNs, LSTM)"
            },
            {
                logo: null,
                desc:"Model Validation"
            },
            {
                logo: null,
                desc:"Model Optimisation"
            },
            {
                logo: null,
                desc:"Feature Engineering"
            }
        ]
    },
    {
        heading: "Tools",
        tech: [
            {
                logo: SKLearnLogo,
                desc:"Scikit-learn"
            },
            {
                logo:PyTorchLogo,
                desc:"PyTorch"
            },
            {
                logo:TFLogo,
                desc:"Tensorflow"
            },
            {
                logo:KerasLogo,
                desc:"Keras"
            },
            {
                logo:NepAILogo,
                desc:"Neptune.ai"
            },
            {
                logo: MLFlowLogo,
                desc:"MLflow"
            }
        ]
    },
    {
        heading: "Web Technologies",
        tech: [
            {
                logo:ReactLogo,
                desc:"React"
            },
            {
                logo:ReduxLogo,
                desc:"Redux"
            },
            {
                logo:NodeLogo,
                desc:"Node.js"
            },
            {
                logo:DJangoLogo,
                desc:"DJango"
            }
        ]
    },
    {
        heading: "Database",
        tech: [
            {
                logo:PostGreSQLLogo,
                desc:"PostGreSQL"
            },
            {
                logo:MySQLLogo,
                desc:"MySQL"
            },
            {
                logo:MongoLogo,
                desc:"MongoDB"
            },
            {
                logo:FirebaseLogo,
                desc:"Firebase"
            }
        ]
    },
]

export const projects = [
    {
        title: "Image Super Resolution",
        desc: ["Implemented CNN and GAN from scratch for improving the quality of pixelated, low quality images."],
        deployedLink: "https://kira2406-imagesuperres-esrgan-app-szstbp.streamlit.app/",
        githubLink: "https://github.com/kira2406/Image-Quality-Enhancement",
        tags: ["AIML", "ALL"],
        tech: ["Pandas","Deep Learning", "GAN", "CNN", "Streamlit"],
        thumbnail: null
    },
    {
        title: "Norway Fisheries Species and Tools Recommendation System",
        desc: ["Performed data cleaning and preprocessing on Norwegian fisheries dataset.", "Using the cleaned dataset, I trained machine learning models to predict the most possible species to be caught at a given region and the tools recommendation for it."],
        deployedLink: "",
        githubLink: "https://github.com/sridharahn/norway-fishing-MLModel",
        tags: ["AIML", "ALL"],
        tech: ["Pandas","Data cleaning", "Exploratory Data Analysis", "Scikit-learn", "Django"],
        thumbnail: null
    },
    {
        title: "Automated Parking System using Convoluted Neural Networks",
        desc: ["Automated parking by storing registration plate data and timestamps using low-light enhancement algorithms for improved detection in low light.","Utilized the Faster R-CNN model for real-time detection from webcam input and integrated the model with a database system for collecting parking fees."],
        deployedLink: "",
        githubLink: null,
        tags: ["AIML", "ALL"],
        tech: ["Pandas","Tensorflow", "OpenCV", "Numpy", "Scikit-learn", "Django"],
        thumbnail: null
    },
    {
        title: "Formula-1 Database Management System",
        desc: ["Designed a detailed database system to manage data for Formula 1 events, ensuring BCNF normalization.",
            "Developed stored procedures to automatically refresh team standings and driver standings table whenever new race data was entered into the database."],
        deployedLink: "",
        githubLink: "https://github.com/kira2406/f1_dbms",
        tags: ["FS", "ALL"],
        tech: ["SQL","PostgreSQL", "React", "Node.js"],
        thumbnail: null

    },
    {
        title: "An RPG Game: PokeReigns",
        desc: ["Developed an online role-playing game inspired by the popular anime Pokemon.", "Enables users to capture and train Pokemons through battles with wild Pokemons and/or other trainers", 
              "Leveraged Google’s Firebase for managing authentication and storing users' data as it provides an identity platform and in-built UI libraries to authenticate the user in the application securely"
        ],
        deployedLink: "https://pokereigns.web.app/",
        githubLink: "https://github.com/kira2406/PokeReigns",
        tags: ["FS", "ALL"],
        tech: ["MongoDB","Firebase", "React", "Node.js"],
        thumbnail: PokereignsThumb

    },
    {
        title: "Olympics Database Management System",
        desc: ["Successfully designed a comprehensive database system to store data related to Olympic events demonstrating the use of normalisation rules", 
              "Employed stored procedures to automatically update country wise medal tally and the main table when a new competition data was added to the database"
        ],
        deployedLink: "",
        githubLink: null,
        tags: ["FS", "ALL"],
        tech: ["SQL","MySQL Workbench", "React", "Node.js"],
        thumbnail: null

    }
]