import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Calculator from "../components/calculator/questionnaire";
import ResultCard from "../components/calculator/result-card";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* page layout */}
            <div className="grid grid-cols-2 bg-parchment">
                <div className="p-2">
                    <Calculator />
                </div>
                <div className="p-2">
                    <ResultCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
