PGDMP     3    "    
        
    z            dormtaskmanager    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16442    dormtaskmanager    DATABASE     o   CREATE DATABASE dormtaskmanager WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE dormtaskmanager;
                postgres    false            �            1259    16444    tasks    TABLE     �   CREATE TABLE public.tasks (
    id integer NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "assignedPerson" text NOT NULL,
    "completionStatus" boolean NOT NULL
);
    DROP TABLE public.tasks;
       public         heap    postgres    false            �            1259    16443    public.tasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public."public.tasks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."public.tasks_id_seq";
       public          postgres    false    210            �           0    0    public.tasks_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public."public.tasks_id_seq" OWNED BY public.tasks.id;
          public          postgres    false    209            \           2604    16447    tasks id    DEFAULT     m   ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public."public.tasks_id_seq"'::regclass);
 7   ALTER TABLE public.tasks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    16444    tasks 
   TABLE DATA           c   COPY public.tasks (id, description, "createdAt", "assignedPerson", "completionStatus") FROM stdin;
    public          postgres    false    210          �           0    0    public.tasks_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."public.tasks_id_seq"', 8, true);
          public          postgres    false    209            ^           2606    16451    tasks tasks_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_pk;
       public            postgres    false    210            �   �   x�u�1�0Eg��@Q����X�6�J%��b� �M[�����wP�D��x�q W:WX[�
�r���1��f�ñ�q~�:�E���4�K�"?��S�����Q��φ�K�(���i�Բp%��aC�~��[I�����@C4     