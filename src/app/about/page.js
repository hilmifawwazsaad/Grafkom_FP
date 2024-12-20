'use client'

import Image from "next/image";
import React, { useEffect } from "react";
import MemberCard from "../../components/MemberCard";
import Navbar from "../../components/Navbar";
import "../globals.css";

export default function About() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <Navbar>
            <section className="container mx-auto text-lg flex flex-col justify-center items-center space-y-24 mt-10">
                {/* Logo and Description */}
                <div className="w-2/3 flex flex-col gap-y-6 justify-center items-center">
                    <h3 className="text-4xl font-semibold">Discover Your Future Path</h3>
                    <p className="text-lg text-center">
                        This website is designed to help high school students choose the right
                        major by analyzing their interests, skills, and academic performance.
                        Using Machine Learning and If-Then Rules, the platform offers
                        personalized major recommendations based on user responses, report
                        card scans, and real-time AI chatbot assistance. Whether you're unsure
                        about your future path or need guidance based on your strengths, this
                        tool provides a reliable way to make informed decisions about your
                        education.
                    </p>
                </div>
                <div className="w-full mx-auto flex flex-col gap-y-10 justify-center items-center">
                    <h3 className="text-4xl font-semibold">Team Members</h3>
                    <div className="flex flex-row gap-x-8">
                        <MemberCard
                            imageSrc="/team/Abel.png"
                            name="Abel"
                            nrp="5025221005"
                        />
                        <MemberCard
                            imageSrc="/team/Illona.png"
                            name="Illona"
                            nrp="5025221056"
                        />
                        <MemberCard
                            imageSrc="/team/Hilmi.png"
                            name="Hilmi"
                            nrp="5025221103"
                        />
                        <MemberCard
                            imageSrc="/team/Fatih.png"
                            name="Fatih"
                            nrp="5025221191"
                        />
                        <MemberCard
                            imageSrc="/team/Richo.png"
                            name="Richo"
                            nrp="5025221242"
                        />
                    </div>
                </div>
            </section>
        </Navbar>

    );
}