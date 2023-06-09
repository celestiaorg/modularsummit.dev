import * as React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";

export default function NotFoundPage() {
	return (
		<Layout>
			<section className='not-found'>
				<div className='container'>
					<div className='content-wrapper'>
						<div className='flex flex-wrap'>
							<div className='basis-full'>
								<h1 className='mb-8 heading-lg'>404 - Page not found </h1>
								<p className='max-w-2xl mb-10 text-lg'>
									We apologize, but the page you're looking for cannot be found. Please visit our homepage for more information.
									Thank you for your understanding.
								</p>
								<Link to='/'>
									<button className='primary'>Go to homepage</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
