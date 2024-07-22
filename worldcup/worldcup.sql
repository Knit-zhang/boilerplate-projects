--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL,
    round character varying(60) NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(60) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (225, 2018, 409, 410, 4, 2, 'Final');
INSERT INTO public.games VALUES (226, 2018, 411, 412, 2, 0, 'Third Place');
INSERT INTO public.games VALUES (227, 2018, 410, 412, 2, 1, 'Semi-Final');
INSERT INTO public.games VALUES (228, 2018, 409, 411, 1, 0, 'Semi-Final');
INSERT INTO public.games VALUES (229, 2018, 410, 413, 3, 2, 'Quarter-Final');
INSERT INTO public.games VALUES (230, 2018, 412, 414, 2, 0, 'Quarter-Final');
INSERT INTO public.games VALUES (231, 2018, 411, 415, 2, 1, 'Quarter-Final');
INSERT INTO public.games VALUES (232, 2018, 409, 416, 2, 0, 'Quarter-Final');
INSERT INTO public.games VALUES (233, 2018, 412, 417, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (234, 2018, 414, 418, 1, 0, 'Eighth-Final');
INSERT INTO public.games VALUES (235, 2018, 411, 419, 3, 2, 'Eighth-Final');
INSERT INTO public.games VALUES (236, 2018, 415, 420, 2, 0, 'Eighth-Final');
INSERT INTO public.games VALUES (237, 2018, 410, 421, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (238, 2018, 413, 422, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (239, 2018, 416, 423, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (240, 2018, 409, 424, 4, 3, 'Eighth-Final');
INSERT INTO public.games VALUES (241, 2014, 425, 424, 1, 0, 'Final');
INSERT INTO public.games VALUES (242, 2014, 426, 415, 3, 0, 'Third Place');
INSERT INTO public.games VALUES (243, 2014, 424, 426, 1, 0, 'Semi-Final');
INSERT INTO public.games VALUES (244, 2014, 425, 415, 7, 1, 'Semi-Final');
INSERT INTO public.games VALUES (245, 2014, 426, 427, 1, 0, 'Quarter-Final');
INSERT INTO public.games VALUES (246, 2014, 424, 411, 1, 0, 'Quarter-Final');
INSERT INTO public.games VALUES (247, 2014, 415, 417, 2, 1, 'Quarter-Final');
INSERT INTO public.games VALUES (248, 2014, 425, 409, 1, 0, 'Quarter-Final');
INSERT INTO public.games VALUES (249, 2014, 415, 428, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (250, 2014, 417, 416, 2, 0, 'Eighth-Final');
INSERT INTO public.games VALUES (251, 2014, 409, 429, 2, 0, 'Eighth-Final');
INSERT INTO public.games VALUES (252, 2014, 425, 430, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (253, 2014, 426, 420, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (254, 2014, 427, 431, 2, 1, 'Eighth-Final');
INSERT INTO public.games VALUES (255, 2014, 424, 418, 1, 0, 'Eighth-Final');
INSERT INTO public.games VALUES (256, 2014, 411, 432, 2, 1, 'Eighth-Final');


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (409, 'France');
INSERT INTO public.teams VALUES (410, 'Croatia');
INSERT INTO public.teams VALUES (411, 'Belgium');
INSERT INTO public.teams VALUES (412, 'England');
INSERT INTO public.teams VALUES (413, 'Russia');
INSERT INTO public.teams VALUES (414, 'Sweden');
INSERT INTO public.teams VALUES (415, 'Brazil');
INSERT INTO public.teams VALUES (416, 'Uruguay');
INSERT INTO public.teams VALUES (417, 'Colombia');
INSERT INTO public.teams VALUES (418, 'Switzerland');
INSERT INTO public.teams VALUES (419, 'Japan');
INSERT INTO public.teams VALUES (420, 'Mexico');
INSERT INTO public.teams VALUES (421, 'Denmark');
INSERT INTO public.teams VALUES (422, 'Spain');
INSERT INTO public.teams VALUES (423, 'Portugal');
INSERT INTO public.teams VALUES (424, 'Argentina');
INSERT INTO public.teams VALUES (425, 'Germany');
INSERT INTO public.teams VALUES (426, 'Netherlands');
INSERT INTO public.teams VALUES (427, 'Costa Rica');
INSERT INTO public.teams VALUES (428, 'Chile');
INSERT INTO public.teams VALUES (429, 'Nigeria');
INSERT INTO public.teams VALUES (430, 'Algeria');
INSERT INTO public.teams VALUES (431, 'Greece');
INSERT INTO public.teams VALUES (432, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 256, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 432, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

