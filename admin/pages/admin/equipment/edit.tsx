import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { EquipmentForm } from '../../../components/forms/EquipmentForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit equipment
			</SlotSources.Title>
			<EditScope entity="Equipment(id=$id)" redirectOnSuccess="admin/equipment/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/equipment/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<EquipmentForm />
			</EditScope>
		</>
	)
}
