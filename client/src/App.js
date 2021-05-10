import { useEffect, useState } from 'react';
import { useLocation, BrowserRouter, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import ReactJson from 'react-json-view';

const App = () => {
	const [topics, setTopics] = useState([]);
	const URL = 'http://104.131.55.240:8000';
	const pathname = useLocation().pathname;
	const [response, setResponse] = useState([]);

	useEffect(() => {
		fetch(`${URL}/subscriber${pathname}`)
			.then((response) => response.json())
			.then((data) => {
				if ((data.code === 404 && pathname !== '/') || pathname !== '') {
					alert(data.message);
				} else {
					setTopics(data.topics);
				}
			});
	}, [pathname]);

	useEffect(() => {
		const socket = socketIOClient(URL);
		for (let i = 0; i < topics.length; i++) {
			socket.on(topics[i], (data) => {
				setResponse([...response, data]);
			});
		}
	}, [response, topics]);
	return (
		<div>
			<ReactJson displayObjectSize={false} displayDataTypes={false} enableClipboard={false} displayArrayKey={false} src={response} />
		</div>
	);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	return (
		<BrowserRouter>
			<Route path='*' component={App} />
		</BrowserRouter>
	);
};
