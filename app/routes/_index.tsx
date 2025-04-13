import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: '𝕏treaming' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return <div>おはよー</div>;
}
