import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { CalendarIcon, LayersIcon, MusicIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarIcon />
			<>
				Festivals
			</>
		</Stack>}
			to="admin/festival/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MusicIcon />
			<>
				Performances
			</>
		</Stack>}
			to="admin/performance/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LayersIcon />
			<>
				Stages
			</>
		</Stack>}
			to="admin/stage/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Equipment
			</>
		</Stack>}
			to="admin/equipment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('stageManager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MusicIcon />
			<>
				Performances
			</>
		</Stack>}
			to="stageManager/performance/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LayersIcon />
			<>
				Stages
			</>
		</Stack>}
			to="stageManager/stage/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Equipment
			</>
		</Stack>}
			to="stageManager/equipment/list"
		/>
	</HasRole>
</Menu>)
