import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    ul {
        display: flex;
        align-items: center;
    }
    li {
        list-style: none;
        margin: 15px;
        text-transform: uppercase;
    }
    .nav-title {
        color: #fff;
    }
    .profile-min-section {
        display: flex;
        align-items: center;
        margin: 10px;
        .download-btn {
            margin-right: 25px;
            background-color: #fcaf17;
            height: 50px;
            border: none;
            &:hover {
                color: white;
            }
        }
        .bell-icon {
            margin-left: 5px;
        }
        .img-profile {
            margin-left: 15px;
            border-radius: 50%;
        }
    }
    
`;
