import * as React from 'react'
import { DataGridScope, DeleteEntityButton, EnumCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Users
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/user/create">
					Create new user
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="User" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/user/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<TextCell key="email" field="email" header="Email" />
				<EnumCell options={{ admin: 'admin', stageManager: 'stageManager' }} key="role" field="role" header="Role" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
