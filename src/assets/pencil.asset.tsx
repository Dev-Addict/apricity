import {forwardRef} from 'react';
import {SvgProps} from '../types/props/svg.props.ts';

export interface PencilProps extends SvgProps {}

export const Pencil = forwardRef<SVGSVGElement, PencilProps>(function Pencil(
	{color, ...props},
	ref
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={217}
			height={26}
			viewBox="0 0 217 26"
			fill="none"
			{...props}
			ref={ref}>
			<path
				fill={color}
				d="M190.404 7.666c-33.91.023-143.896.066-171.434.09l.004 10.403c27.574-.019 137.683-.06 171.557-.084-7.438-7.327-.127-10.409-.127-10.409Z"
			/>
			<path
				fill="#5C2F10"
				d="M190.674 7.056a.667.667 0 0 1-.009 1.223c-.024.01-2.349 1.027-2.748 3.141-.331 1.761.705 3.84 3.082 6.18.192.19.251.478.147.727a.664.664 0 0 1-.616.414l-171.557.085a.668.668 0 0 1-.667-.667l-.002-10.404c0-.368.298-.667.665-.668 23.852-.019 120.937-.054 156.335-.079l15.098-.01a.687.687 0 0 1 .272.058Zm-1.685 10.353c-1.944-2.245-2.745-4.342-2.379-6.249.236-1.234.921-2.166 1.624-2.828l-12.929.01c-35.073.023-131.536.057-155.669.078l.004 9.072 169.349-.083Z"
			/>
			<path
				fill={color}
				d="m190.404 1.747-171.438.085.004 5.924c27.538-.023 137.524-.066 171.434-.09-4.08-2.927 0-5.919 0-5.919Z"
			/>
			<path
				fill="#000"
				d="M190.674 1.137a.669.669 0 0 1 .126 1.147c-.015.012-1.555 1.17-1.544 2.562.007.786.523 1.552 1.535 2.278a.667.667 0 0 1-.386 1.21l-14.949.008c-35.405.024-132.6.06-156.487.078a.654.654 0 0 1-.47-.194.659.659 0 0 1-.195-.47L18.3 1.831a.67.67 0 0 1 .668-.667l171.438-.084a.649.649 0 0 1 .269.056ZM188.72 7c-.525-.67-.792-1.39-.795-2.15-.005-.966.426-1.806.897-2.435l-169.188.083.002 4.59c24.168-.02 120.743-.054 155.82-.078L188.72 7Z"
			/>
			<path
				fill={color}
				d="M190.531 18.075c-33.874.024-143.984.065-171.558.084l.007 5.917 171.134-.084c-4.759-4.53.417-5.917.417-5.917Z"
			/>
			<path
				fill="#000"
				d="M190.8 17.466a.666.666 0 0 1-.096 1.252c-.451.124-1.67.642-1.895 1.542-.209.83.401 1.952 1.765 3.25a.662.662 0 0 1 .158.73.665.665 0 0 1-.616.42l-171.134.083a.67.67 0 0 1-.668-.666l-.008-5.918a.673.673 0 0 1 .195-.47.675.675 0 0 1 .472-.196l171.556-.085c.096 0 .187.021.271.058Zm-2.208 5.86c-.975-1.23-1.336-2.37-1.075-3.399.121-.47.358-.862.647-1.184l-168.524.083.005 4.582 168.947-.082Z"
			/>
			<path
				fill="#F7DACB"
				d="m203.995 18.066 6.915-3.018 5.04-2.193-11.961-5.196-13.584-5.913s-4.08 2.993 0 5.92c0 0-7.311 3.083.126 10.41 0 0-5.176 1.384-.416 5.915l.306.001 13.574-5.926Z"
			/>
			<path
				fill="#000"
				d="M216.22 12.247a.666.666 0 0 1-.004 1.22l-25.531 11.135a.634.634 0 0 1-.268.055l-.304.001a.667.667 0 0 1-.459-.184c-1.759-1.676-2.48-3.205-2.137-4.547.271-1.063 1.143-1.723 1.851-2.095-2.218-2.404-3.147-4.646-2.758-6.673.353-1.832 1.69-2.998 2.616-3.604-.86-.825-1.297-1.733-1.302-2.708-.012-2.078 2-3.576 2.087-3.639a.67.67 0 0 1 .66-.074l25.545 11.11.004.003Zm-25.866 11.048 23.926-10.439-23.761-10.333c-.449.41-1.269 1.305-1.262 2.323.007.786.523 1.552 1.535 2.278a.666.666 0 0 1-.129 1.156c-.021.01-2.346 1.026-2.746 3.14-.331 1.761.705 3.84 3.082 6.18a.667.667 0 0 1-.297 1.118c-.448.125-1.668.642-1.893 1.542-.199.782.337 1.828 1.545 3.035Z"
			/>
			<path
				fill={color}
				d="m203.243 18.396.752-.33 6.915-3.018 5.04-2.193-11.961-5.196-.749-.33.003 11.067Z"
			/>
			<path
				fill="#000"
				d="M216.22 12.247a.666.666 0 0 1-.004 1.22l-12.707 5.54a.668.668 0 0 1-.933-.612l-.004-11.069a.668.668 0 0 1 .937-.609l.748.332 11.957 5.195.006.003Zm-12.31 5.131 10.37-4.522-10.373-4.505.003 9.027Z"
			/>
			<path
				fill="#fff"
				d="m27.306 24.901 3.617.05s-7.278-10.718-.893-23.894l-4.02.013c-3.997 10.973-1.25 19.262 1.296 23.831Z"
			/>
			<path
				fill="#000"
				d="M30.301.447a.672.672 0 0 1 .331.901c-6.149 12.682.772 23.123.843 23.228a.668.668 0 0 1 .035.691.67.67 0 0 1-.597.35l-3.616-.049a.668.668 0 0 1-.573-.34c-2.31-4.144-5.554-12.82-1.342-24.385a.667.667 0 0 1 .623-.439L30.03.392a.652.652 0 0 1 .272.055Zm-.544 23.821c-1.594-2.989-5.417-11.97-.77-22.54l-2.508.007c-3.523 10.057-1.346 17.728 1.225 22.505l2.053.028Z"
			/>
			<path
				fill="#E9E9E9"
				d="M2.31 6.493C.975 11.05-.27 20.696 8.07 24.687l15.102.173c-2.517-4.667-5.09-12.918-1.05-23.779l-13.1.041s-5.396.821-6.713 5.371Z"
			/>
			<path
				fill="#000"
				d="M22.392.471a.673.673 0 0 1 .353.843c-3.885 10.442-1.593 18.396 1.012 23.23a.663.663 0 0 1-.015.661.67.67 0 0 1-.578.322L8.06 25.355a.661.661 0 0 1-.279-.066c-2.399-1.148-9.932-5.912-6.11-18.983C3.087 1.406 8.682.5 8.92.463A.656.656 0 0 1 9.02.456l13.1-.04a.654.654 0 0 1 .273.055Zm-.318 23.71c-2.428-4.988-4.27-12.637-.9-22.43L9.08 1.788c-.494.09-5.01 1.02-6.13 4.89C2.062 9.713-.164 19.89 8.226 24.021l13.848.16Z"
			/>
			<path
				fill="#D8D8D8"
				d="M2.31 6.493c-.494 1.677-.962 4.046-.958 6.562.841-1.864 2.472-3.275 5.154-3.627 4.485-.573 9.096-.578 13.704-.43a33.023 33.023 0 0 1 1.911-7.917l-13.1.041s-5.395.821-6.712 5.371Z"
			/>
			<path
				fill="#fff"
				d="m23.172 24.86 4.134.041c-2.547-4.569-5.293-12.858-1.297-23.83l-3.888.01c-4.04 10.86-1.466 19.113 1.051 23.78Z"
			/>
			<path
				fill="#000"
				d="M26.28.461a.672.672 0 0 1 .356.837c-3.83 10.512-1.433 18.462 1.254 23.28a.667.667 0 0 1-.589.99l-4.135-.043a.661.661 0 0 1-.58-.349C19.848 20.1 17.438 11.76 21.496.85a.67.67 0 0 1 .624-.433l3.887-.01a.632.632 0 0 1 .272.055Zm-.085 23.763c-2.16-4.326-4.572-12.22-1.126-22.484l-2.48.006c-3.577 9.987-1.506 17.658.987 22.451l2.62.027Z"
			/>
			<path
				fill="#D8D8D8"
				d="M19.981 22.684 9.055 22.53s-4.494-.857-4.96-5.273c0 0 2.835 2.632 6.304 2.834l8.676.347.906 2.246Z"
			/>
		</svg>
	);
});