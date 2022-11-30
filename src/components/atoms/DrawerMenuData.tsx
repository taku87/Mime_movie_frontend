import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const DrawerMenuData = [
	{
		title: '利用規約',
		icon: <AssignmentIcon />,
		link: '/terms/',
	},
	{
		title: 'プライバシーポリシー',
		icon: <PrivacyTipIcon />,
		link: '/privacy_policy/',
	},
	{
		title: 'マイページ',
		icon: <AccountBoxIcon />,
		link: '/mypage/',
	},

]
